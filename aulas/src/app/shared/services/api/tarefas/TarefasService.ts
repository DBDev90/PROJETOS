import { Api } from "../ApiConfig";
import { ApiException } from "../ErrorException";

export interface ITarefa {
    title: string;
    isCompleted: boolean;
    id: number
}

const getAll = async (): Promise<ITarefa[] | ApiException> => {
    try {
        const { data } = await Api().get('/tarefas');
        return data
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao consultar os registros.');
    }
};

const getById = async (id: number): Promise<ITarefa | ApiException> => {
    try {
        const { data } = await Api().get(`/tarefas/${id}`);
        return data
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao consultar o registro.');
    }
};

const create = async (dataToCreate: Omit<ITarefa, 'id'>): Promise<ITarefa | ApiException> => {
    try {
        const { data } = await Api().post<any>('/tarefas', dataToCreate);
        return data
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao criar o registro.');
    }
};

const updateById = async (id: number, dataToUpdate: ITarefa): Promise<ITarefa | ApiException> => {
    try {
        const { data } = await Api().put(`/tarefas/${id}`, dataToUpdate);
        return data
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao consultar a API.');
    }
};

const deleteById = async (id: number): Promise<undefined | ApiException> => {
    try {
        await Api().delete(`/tarefas/${id}`);
        return undefined
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao apagar o registro.');
    }
};

export const TarefasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
};