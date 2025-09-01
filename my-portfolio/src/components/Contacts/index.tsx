import { useTheme } from "@/hooks/useTheme";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { FaPaperPlane } from "react-icons/fa";
import { useActionState } from "react";
import Titles from "../Common/Titles";

function Contacts() {
  const { myTheme } = useTheme();

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
    <div>
      <section className="mb-10">
        <Titles title="Contacts" />
        <div
          className={`rounded-3xl overflow-hidden border-1 border-(--secondary) ${
            myTheme == "dark" ? "grayscale" : ""
          }`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56513.12919836762!2d85.30577323945151!3d27.715107158744026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1756551595102!5m2!1sen!2snp"
            width="100%"
            height="380"
            loading="lazy"
          ></iframe>
        </div>
      </section>
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
    </div>
  );
}

export default Contacts;
