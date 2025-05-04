type OGPData = {
    title: string;
    description: string;
};

export const ogpData = $state<OGPData>({
    title: '',
    description: '',
});