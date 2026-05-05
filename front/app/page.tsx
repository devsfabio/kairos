'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';

export default function Home() {
  return (
    <div className="">
      <div className="">
        <form action="">
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
                <Input />
              </Field>
              <Field>
                <FieldLabel htmlFor="">Louvor</FieldLabel>
                <Input />
              </Field>
              <Field>
                <FieldLabel htmlFor="">URL do Youtube</FieldLabel>
                <Input />
              </Field>
            </CardContent>
            <CardFooter>
              <Button
                size={'lg'}
                className="w-full cursor-pointer bg-green-500 hover:bg-green-400 px-5 py-2 rounded-xl transition text-black font-bold text-lg"
                type="submit"
              >
                Adicionar
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
}
