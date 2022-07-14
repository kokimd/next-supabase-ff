import { Button, NumberInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FC } from 'react';
import { Edit } from 'tabler-icons-react';
import { useMutateJudge } from '../../hooks/useMutateJudge';
import { JudgeType } from '../../utils/types';

type Props = {
  formData: JudgeType;
};

export const EditJudgeInputs: FC<Props> = ({ formData }) => {
  const { updateJudgeMutation } = useMutateJudge();

  const form = useForm({
    initialValues: {
      cuteNess: formData.cuteNess,
      fun: formData.fun,
      amazing: formData.amazing,
    },
  });

  const payload = {
    ...form.values,
    id: formData.id,
    participant_id: formData.participant_id,
  };

  return (
    <>
      <NumberInput
        {...form.getInputProps('cuteNess')}
        min={0}
        step={10}
        max={50}
        className='w-20'
        label='可愛さ'
        styles={{
          label: {
            fontWeight: 'bold',
            padding: '4px 0',
          },
        }}
      />
      <NumberInput
        {...form.getInputProps('fun')}
        min={0}
        step={10}
        max={50}
        className='w-20'
        label='面白さ'
        styles={{ label: { fontWeight: 'bold', padding: '4px 0' } }}
      />
      <NumberInput
        {...form.getInputProps('amazing')}
        min={0}
        step={10}
        max={50}
        className='w-20'
        label='パフォ'
        styles={{ label: { fontWeight: 'bold', padding: '4px 0' } }}
      />
      <NumberInput
        value={form.values.cuteNess + form.values.fun + form.values.amazing}
        className='w-20'
        label='合計'
        styles={{
          label: {
            fontWeight: 'bold',
            padding: '4px 0',
          },
        }}
        disabled
      />
      <Button
        onClick={form.onSubmit(() => updateJudgeMutation.mutate(payload))}
      >
        <Edit size={20} />
      </Button>
    </>
  );
};
