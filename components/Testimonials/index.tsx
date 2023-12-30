import Card from "./card";
import Comment from "./comment";
import { styles } from "./style";

export const Index = () => {
  return (
    <>
      <div className={styles.screen}>
        <div className={styles.container}>
          <div className={styles.element}>
            <Card />
            <div className={styles.grid}>
              <Comment
                user={{
                  name: "Murilo Dias",
                  role: "Apresentador & Creator",
                  image:
                    "https://pbs.twimg.com/profile_images/1730639731510181889/cMrVIVEq_400x400.jpg",
                }}
                comment={String(
                  "Parceria do Palmeiras com Carteira do Google facilita experiênciado torcedor."
                )}
              />
              <Comment
                user={{
                  name: "japinha",
                  role: "Influencer",
                  image:
                    "https://pbs.twimg.com/profile_images/1711442670055243776/aYddw0hS_400x400.jpg",
                }}
                comment={String(
                  "o show de betha já foi adiado tantas vezes que tem hora que eu abro a carteira do google e levo um susto com o ingresso lá"
                )}
              />
              <Comment
                user={{
                  name: "leona",
                  role: "Influencer",
                  image:
                    "https://pbs.twimg.com/profile_images/1728604074222759936/WU9Gf-UQ_400x400.jpg",
                }}
                comment={String(
                  "essa carteira do google é um hino, uso bilhete do transporte público, carteira de vacinação/covid, carteira do sus, cartões de banco, ingresso de museus, gift card. amo a tecnologia."
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
