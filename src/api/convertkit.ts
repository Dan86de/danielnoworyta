"use server";

const baseUrl = "https://api.convertkit.com/v3/";
const formId = process.env.CONVERTKIT_FORM_ID;
const secret = process.env.CONVERTKIT_API_SECRET;

export const addSubscriberToForm = async (formData: FormData) => {
	const first_name = formData.get("name");
	const email = formData.get("email");

	if (!secret) {
		throw new Error("There is missing key in env.");
	}

	const result = await fetch(`${baseUrl}forms/${formId}/subscribe?api_secret=${secret}`, {
		method: "POST",
		headers: new Headers({
			"Content-Type": "application/json; charset=utf-8",
		}),
		body: JSON.stringify({
			api_secret: secret,
			email,
			first_name,
		}),
	});

	await result.json().then((res) => console.log(res));
};
