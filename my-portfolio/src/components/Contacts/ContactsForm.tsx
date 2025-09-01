import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { FaPaperPlane } from "react-icons/fa";
import { useActionState } from "react";
import Titles from "../Common/Titles";

function ContactsForm() {
  async function emailSubmission(
    _prevState: string | null,
    formData: FormData
  ): Promise<string | null> {
    formData.append("access_key", "c3144bdc-7c06-40aa-b4b0-396463a63589");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.success) {
      return "Yayyy";
    } else {
      return data.message;
    }
  }

  const [error, submitAction, isPending] = useActionState(
    emailSubmission,
    null
  );
  return (
    <section>
      <div className="mb-10">
        <Titles title="Contact Form" />
        <div className="my-5">
          {error && error}
          <form action={submitAction}>
            <div className="grid grid-cols-2 gap-5">
              <Input
                type="text"
                placeholder="Name"
                className="h-10 border-1 border-(--secondary)"
                name="name"
                required
              />
              <Input
                type="email"
                placeholder="E-Mail"
                className="h-10 border-1 border-(--secondary)"
                name="email"
              />
              <Input
                type="number"
                placeholder="Phone Number"
                className="h-10 border-1 border-(--secondary)"
              />
              <Input
                type="text"
                placeholder="Subject"
                className="h-10 border-1 border-(--secondary)"
                name="subject"
              />
            </div>
            <div className="mt-5">
              <Textarea
                placeholder="Type your message here."
                name="message"
                className="h-40 border-1 border-(--secondary)"
              />
            </div>
            <Button
              className="flex justify-self-end bg-(--primary-blue) mt-5"
              type="submit"
            >
              <FaPaperPlane /> {isPending ? "Submitting" : "Submit"}
            </Button>
          </form>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default ContactsForm;
