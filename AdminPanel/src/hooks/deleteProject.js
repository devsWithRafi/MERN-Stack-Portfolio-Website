export const deleteProject = async (url, id) => {
    try {
        const res = await fetch(`${url}/${id}`, {
            method: 'DELETE',
        });
        const msg = await res.json();
        console.log(msg);
        return msg;
    } catch (error) {
        console.log('Error ->', error);
        throw error;
    }
};
