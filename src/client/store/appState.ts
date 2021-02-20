import { useContext } from 'react';
import { AppContext } from './appContext';
import { Client } from '../../shared/dao';
import { cloneDeep } from 'lodash';
import { http } from '../util/api';

const useAppState = () => {
    const [ state, setState ] = useContext(AppContext);

    const addNewClient = async (client: Client) => {
        try {
            const { data, status } = await http.put('/roster/new', client);
            if (status === 200) {
                console.log("AddNewClient: Success:", status);
                let tempRoster = cloneDeep(state.fullRoster);
                tempRoster.push(data);
                setState(state => ({ ...state, fullRoster: tempRoster }));
                return true;
            } else {
                console.log("AddNewClient: BadResponse:", status)
            }
        } catch (error) {
            console.log("AddNewClient:", error);
            return false;
        }
    }

    const setLoading = (isLoading) => {
        setState(state => ({ ...state, loading: isLoading }))
    }

    return {
        loading: state.loading,
        setLoading,
        userProfile: state.userProfile,
        fullRoster: state.fullRoster,
        allTags: state.allTags,
        addNewClient
    }
}

export default useAppState;