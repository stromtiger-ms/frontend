export default async function getConsumer(id) {
    const response = await fetch('/test');
    //const movies = await response.json();
    const example = response.body;

    await new Promise(resolve => setTimeout(resolve, 1000));
    return example;
}