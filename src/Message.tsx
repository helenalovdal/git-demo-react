// PascalCasing 
// Describe what the UI will look like
function Message() {
    //JSX: JavaScript XML
    const name = 'You';
    if(name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;


}
export default Message;