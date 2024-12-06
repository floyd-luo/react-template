const handleError = (error) => {
    console.error(error);
    if (error.response) {
        alert(`Error: ${error.response.data.message}`);
    } else {
        alert('An unexpected error occurred.');
    }
};

export default handleError;