import Button from "../../atomics/button";
import Container from "../../container";

export default function About() {
  return (
    <div className="mt-10 items-center  flex justify-center flex-col">
      <Container>
        <p className="text-center ">
          Explore your options and make informed decisions with our
          comprehensive guide to universities around the world. Discover
          top-ranked institutions, explore diverse programs, and connect with
          like-minded individuals to build your academic future. With
          easy-to-use search tools, in-depth profiles, and trusted ratings and
          reviews, we provide everything you need to make the right choice for
          your academic journey. Start your search today and find your perfect
          fit!
        </p>
        <div className="mt-6 flex justify-center">
          <Button title="saber mais ?" />
        </div>
      </Container>
    </div>
  );
}
