/*
TODO: This should eventually live in Price.tsx
TODO: Replace the photo with coded elements*/

type Props = {
  photo?: string;
};

const PriceList = ({ photo }: Props) => {
  return (
    <section className="PriceList mb-22">
      <img src={photo} alt="Price List" />
    </section>
  );
};

export default PriceList;
