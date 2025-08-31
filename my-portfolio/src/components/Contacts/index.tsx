import { useTheme } from "@/hooks/useTheme";

function Contacts() {
  const { myTheme } = useTheme();
  return (
    <div>
      <section className="">
        <div className="text-3xl font-bold">Contacts</div>
        <div className="h-1.5 bg-(--primary-blue) w-[5em] rounded my-5"></div>
      </section>
      <div
        className={`rounded-3xl overflow-hidden border-1 border-(--secondary) my-10 ${
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
      <section>
        <div className="mb-10">
          <div className="text-3xl font-bold">Contact Form</div>
          <div className="h-1.5 bg-(--primary-blue) w-[5em] rounded my-5"></div>
        </div>
        <div></div>
      </section>
    </div>
  );
}

export default Contacts;
