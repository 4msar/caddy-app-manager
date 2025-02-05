import { useAppStore } from '@/stores';
import { axios } from './fetcher';
import { convertCaddyJsonToSites } from './utils';

export const useGetSites = async () => {
    const response = await axios.get('/config');

    const { setSites } = useAppStore();

    const sites = convertCaddyJsonToSites(response.data);

    if (sites.length > 0) {
        setSites(sites);
    }
};
