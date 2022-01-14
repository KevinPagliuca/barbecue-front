import { useMutation, useQuery, UseQueryOptions } from 'react-query';
import { toast } from 'react-toastify';

import { AxiosError } from 'axios';
import { add } from 'date-fns';
import { IChurras } from 'interfaces/churras';
import { churrasService } from 'services/ChurrasService';
import { queryClient } from 'services/queryClient';

interface IUseChurrasProps {
  options?: UseQueryOptions;
}

interface IUseChurrasByIdProps {
  id: string;
  options?: UseQueryOptions;
}

export const useChurras = ({ options }: IUseChurrasProps) => {
  const { data: items, ...rest } = useQuery(
    ['Churras'],
    churrasService.getAll,
    {
      ...options,
      staleTime: 1000 * 60 * 5, // 5 minutes,
    }
  );

  const churrasList = items as IChurras[];

  const itemsWithCorrectDateFix: IChurras[] = churrasList?.map((item) => ({
    ...item,
    date: add(new Date(item.date), { days: 1 }) as unknown as string,
  }));

  return { churrasList: itemsWithCorrectDateFix, ...rest };
};

export const useChurrasById = ({ id, options }: IUseChurrasByIdProps) => {
  const { data: item, ...rest } = useQuery(
    ['Churras', id],
    () => churrasService.getById(id),
    {
      ...options,
      staleTime: 1000 * 60 * 5, // 5 minutes,
    }
  );

  const itemTyped = item as IChurras;

  const itemWithCorrectDateFix = {
    ...itemTyped,
    date: add(new Date(itemTyped.date), { days: 1 }) as unknown as string,
  };

  return { churras: itemWithCorrectDateFix, ...rest };
};

export const useCreateChurras = () => {
  const { mutateAsync: createChurras, ...rest } = useMutation(
    churrasService.create,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('Churras');
        toast.success('Churras criado com sucesso!');
      },
      onError: (error: AxiosError) => {
        toast.error(error.message);
      },
    }
  );
  return { createChurras, ...rest };
};

export const useUpdateChurras = () => {
  const { mutateAsync: updateChurras, ...rest } = useMutation(
    churrasService.update,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('Churras');
        toast.success('Churras atualizado com sucesso!');
      },
      onError: (error: AxiosError) => {
        toast.error(error.message);
      },
    }
  );
  return { updateChurras, ...rest };
};

export const useDeleteChurras = () => {
  const { mutateAsync: deleteChurras, ...rest } = useMutation(
    churrasService.delete,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('Churras');
        toast.success('Churras deletado com sucesso!');
      },
      onError: (error: AxiosError) => {
        toast.error(error.message);
      },
    }
  );
  return { deleteChurras, ...rest };
};
