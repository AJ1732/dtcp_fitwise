import "./ContactUsBlog.css";

const ContactUsBlog = ({
  newsletterSponsoringConta,
  eatingABalancedDietToMain,
  thinkVibrantFruitsVeggies,
}) => {
  return (
    <div className="contact-us-blog">
      <div className="diet-plan">
        <div className="diet-plan-child" />
        <img
          className="newsletter-sponsoring-contact"
          loading="eager"
          alt=""
          src={newsletterSponsoringConta}
        />
      </div>
      <div className="eating-a-balanced-diet-to-main-parent">
        <h3 className="eating-a-balanced">{eatingABalancedDietToMain}</h3>
        <div className="think-vibrant-fruits">{thinkVibrantFruitsVeggies}</div>
      </div>
    </div>
  );
};

export default ContactUsBlog;
