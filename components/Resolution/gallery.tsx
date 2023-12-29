import { W, wx } from "windstitch";

const concept = wx({
  variants: {
    primary: {
      container: `container grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10`,
    },
    grid: {
      span4: `col-span-4`,
      span3: `col-span-3`,
      span5: `col-span-5`,
    },
    image: {
      left: `rounded-r-3xl object-cover`,
      center: `rounded-xl object-cover w-[250px] h-[250px]`,
      right: `rounded-xl  object-cover h-[400px] w-[520px]`,
    },
  },
});

type concept<T> = {
  primary: {
    container: T;
  };
  grid: {
    span4: T;
    span3: T;
    span5: T;
  };
  image: {
    left: T;
    center: T;
    right: T;
  };
};

const styles = {
  primary: {
    container: concept({
      primary: "container",
    }),
  },
  grid: {
    span4: concept({
      grid: "span4",
    }),
    span3: concept({
      grid: "span3",
    }),
    span5: concept({
      grid: "span5",
    }),
  },
  image: {
    left: concept({
      image: "left",
    }),
    center: concept({
      image: "center",
    }),
    right: concept({
      image: "right",
    }),
  },
} satisfies concept<W.Infer<typeof concept>>;

const { primary, grid, image } = styles;

export default function Gallery() {
  return (
    <>
      <div className={primary.container}>
        <div className={grid.span4}>
          <img
            className={image.left}
            src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
            alt="Image Description"
          />
        </div>

        <div className={grid.span3}>
          <img
            className="rounded-xl object-cover w-[250px] h-[250px]"
            src="https://www.visa.com.br/content/dam/VCOM/regional/lac/brazil/media-kits/images/pagamento-por-aproximacao-800x450.jpg"
            alt="Image Description"
          />
        </div>

        <div className={grid.span5}>
          <img
            className="rounded-xl  object-cover h-[400px] w-[520px] "
            src="https://sebraemg.com.br/wp-content/uploads/2022/11/Como-se-tornar-um-microempreendedor-individual.jpg"
            alt="Image Description"
          />
        </div>
      </div>
    </>
  );
}
