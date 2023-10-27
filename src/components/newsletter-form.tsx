"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as z from "zod";

import { addSubscriberToForm } from "@/api/convertkit";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "Imię musi mieć conajmniej 2 litery.",
	}),
	email: z.string().email({ message: "To nie jest poprawny adres email." }),
});

export function NewsletterForm() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
		},
	});

	const processForm: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
		const formData = new FormData();
		formData.append("name", data.name);
		formData.append("email", data.email);
		await addSubscriberToForm(formData);
		form.reset();
	};

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(processForm)} className="space-y-2 pt-10">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Imię</FormLabel>
								<FormControl>
									<Input placeholder="Imię" {...field} />
								</FormControl>
								<FormDescription>Wpisz Twoje imię.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="Email" {...field} />
								</FormControl>
								<FormDescription>Wpisz Twój email.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="pt-10">
						<Button type="submit" className="w-full ">
							Zapisz się
						</Button>
					</div>
				</form>
			</Form>
		</>
	);
}
