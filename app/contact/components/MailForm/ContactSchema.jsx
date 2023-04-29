import { z } from 'zod';

export const LoginSchema = z.object({
  name: z.string().min(2, 'O nome é obrigatório.'),
  email: z
    .string()
    .min(1, 'O E-mail é obrigatório.')
    .email('Digite um e-mail válido.'),
  message: z
    .string()
    .min(10, 'Por favor, digite uma mensagem com pelo menos 10 caracteres'),
});
