import {defineConfig} from 'vite'
import * as path from "path"
import {viteMockServe} from "vite-plugin-mock";
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
    const isProduction = mode === 'production';
    return {
        define: {
            'import.meta.env.VITE_ENV': JSON.stringify(mode)
        },
        server: {
            port: 3030,
            host: '0.0.0.0',
            open: false, // 自动打开浏览器
            cors: true, // 允许跨域
            proxy: {
                // 配置代理，解决开发环境跨域
                '/api': {
                    target: 'http://your-api-server.com',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        },
        preview: {
            port: 8080,
        },
        build: {
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        // 更精细的代码分割
                        if (id.includes('node_modules')) {
                            return 'vendor';
                        }
                    }
                }
            },
            chunkSizeWarningLimit: 500, // 调整chunk大小警告阈值
            minify: isProduction ? 'terser' : 'esbuild', // 生产环境使用terser
            sourcemap: !isProduction, // 仅在开发环境生成源映射
        },
        plugins: [
            react(),
            viteMockServe({
                mockPath: "@/mock/",
                enable: process.env.VITE_ENV === 'development', // 只在开发环境启用 Mock,
            })],
        resolve: {
            alias: {
                "@": path.join(__dirname, "src"),
            },
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        css: {
            preprocessorOptions: {
                scss: {
                    javascriptEnabled: true,
                    additionalData: `$injectedColor: orange;`,
                },
            },
            modules: {
                // 是对css模块化的默认行为进行覆盖
                localsConvention: "camelCase", // 修改生成的配置对象的key的展示形式(驼峰还是中划线形式)
                scopeBehaviour: "local", // 配置当前的模块化行为是模块化还是全局化 (有hash就是开启了模块化的一个标志, 因为他可以保证产生不同的hash值来控制我们的样式类名不被覆盖)
                generateScopedName: "[name]_[local]_[hash:5]",
                hashPrefix: "dreamer_rossi", // 生成hash会根据类名 + 一些其他的字符串(文件名 + 他内部随机生成一个字符串)去进行生成, 如果想要生成hash更加的独特一点, 可以配置hashPrefix, 配置的这个字符串会参与到最终的hash生成, （hash: 只要字符串有一个字不一样, 那么生成的hash就完全不一样, 但是只要字符串完全一样, 生成的hash就会一样）
            },
        },
        optimizeDeps: {
            include: [
                // 按需添加常用依赖
                'react',
                'react-dom',
                'react-router-dom',
                'axios',
                /*// 性能关键的工具库
                'lodash-es',
                // UI 库常用组件
                '@mui/material/Button',
                '@mui/icons-material/Add'*/
            ],
            // 对于大型项目，可以考虑细粒度预构建
            entries: [
                // 指定入口文件，精确控制预构建范围
                './src/pages/**/*.tsx',
                './src/components/**/*.tsx'
            ]
        }
    }
})
