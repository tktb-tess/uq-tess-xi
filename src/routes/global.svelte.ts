type MyContext = {
    title: string;
};

export const myContext = $state<MyContext>({
    title: '',
});