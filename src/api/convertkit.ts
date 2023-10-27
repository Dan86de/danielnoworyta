"use server";

const baseUrl = "https://api.convertkit.com/v3/";
const formId = process.env.CONVERTKIT_FORM_ID;
const secret = process.env.CONVERTKIT_API_SECRET;

export const getAccountInformation = async () => {
	if (!secret) {
		throw new Error("There is missing key in env.");
	}
	const result = await fetch(`${baseUrl}account?api_secret=${secret}`);

	await result.json().then((res) => console.log(res));
};

export const getAllForms = async () => {
	if (!secret) {
		throw new Error("There is missing key in env.");
	}
	const result = await fetch(`${baseUrl}forms?api_secret=${secret}`);

	await result.json().then((res) => console.log(res));
};

export const addSubscriberToForm = async (formData: FormData) => {
	const first_name = formData.get("name");
	const email = formData.get("email");

	console.log({ first_name, email });

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
export const getSubscribers = async () => {
	if (!secret) {
		throw new Error("There is missing key in env.");
	}
	const result = await fetch(`${baseUrl}forms/${formId}/subscriptions?api_secret=${secret}`, {});

	await result.json().then((res) => console.log(res));
};
