//工具函数的类型定义

export type Nullable<T> = T | null;

export type VoidFunction = () => void;

export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};