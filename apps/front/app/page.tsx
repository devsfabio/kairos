'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useSong } from './_hooks/use-song';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';
import { SongBody, SongBodySchema } from '@kairos/contracts';
import { useCallback, useState } from 'react';
import { toast } from 'sonner';

export default function Home() {
  const { mutate } = useSong();
  const [loading, setLoading] = useState<boolean>(false);

  const { handleSubmit, register, formState } = useForm<SongBody>({
    resolver: zodResolver(SongBodySchema),
    shouldFocusError: true,
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const saveSong = useCallback((data: SongBody) => {
    setLoading(true)

    mutate(data, {
      onSuccess: () => {
        toast("Louvor salvo com sucesso 😍")
        setLoading(false)
      },
      onError: () => {
        toast("Estamos com problemas 🫤 Por favor, tente novamente mais tarde")
        setLoading(false)
      }
    })
  }, [])

  return (
    <div className="">
      <div className="">
        <form
          onSubmit={handleSubmit(saveSong)}
        >
          <Card className="max-w-[400px] mx-auto mt-6  ">
            <CardHeader>
              <CardTitle>Adicionar Louvor</CardTitle>
              <CardDescription>
                Preencha as informações para ajudar na recomendação automática e
                na escolha dos próximos louvores.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <Field>
                <FieldLabel htmlFor="">Artista</FieldLabel>
                <Input
                  {...register('artist')}
                />
                {formState.errors.artist && <FieldError>{formState.errors.artist.message}</FieldError>}
              </Field>
              <Field>
                <FieldLabel htmlFor="">Louvor</FieldLabel>
                <Input
                  {...register('title')}
                />
                {formState.errors.title && <FieldError>{formState.errors.title.message}</FieldError>}
              </Field>
              <Field>
                <FieldLabel htmlFor="">URL do Youtube</FieldLabel>
                <Input
                  {...register('url')}
                />
                {formState.errors.url && <FieldError>{formState.errors.url.message}</FieldError>}
              </Field>
            </CardContent>
            <CardFooter>
              <Button
                size={'lg'}
                className="w-full cursor-pointer bg-green-500 hover:bg-green-400 px-5 py-2 rounded-xl transition text-black font-bold text-lg"
                type="submit"
              >
                {loading ? 'Salvando...' : 'Adicionar'}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
}
