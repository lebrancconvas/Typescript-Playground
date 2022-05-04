interface Subject
{
	name: String;
	topic: String[];
}

const math: Subject = {
	name: "Mathematics",
	topic: ["Linear Algebra", "Calculas"]
}

const showTopic = (subject: Subject): String[] => {
	return subject.topic;
}

console.log(showTopic(math));