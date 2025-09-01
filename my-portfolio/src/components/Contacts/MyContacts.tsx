import { useTheme } from "@/hooks/useTheme";
import Titles from "../Common/Titles";

function MyContacts() {
  const { myTheme } = useTheme();
  return (
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
  );
}

export default MyContacts;
