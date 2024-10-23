import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import Post from "../components/Blog/Post.jsx";
export default function Blog({ theme, setTheme }) {
  return (
    <div id="at" className={`${theme ?? "dark"}`}>
      <div className="max-sm:w-screen flex justify-center bg-platinum dark:bg-jet min-h-screen">
        <div className="dark:text-platinum max-w-[1240px] w-full min-h-screen space-y-8 text-jet">
          <Navbar setTheme={setTheme} theme={theme} />
          <div className="flex-col h-[80%]">
            <div className="flex items-center gap-1 flex-col">
              <code className="flex text-[18px] gap-2 group">
                <h1>&#x0007B;</h1>
                <h1 className="opacity-50 w-7 text-clip transition-all overflow-clip whitespace-nowrap group-hover:w-[25rem]">
                  basicamente um
                </h1>
                <h1
                  className="w-[4.5rem] text-clip transition-all overflow-hidden group-hover:w-[7rem]"
                  style={{ direction: "rtl", textAlign: "left" }}
                >
                  blog
                </h1>
                <h1>&#x0007D;</h1>
              </code>
              <Post
                title="Template repository"
                tags={["Github", "Tips"]}
                texts={[
                  "O GitHub é uma das plataformas mais populares para hospedagem de projetos e colaboração em código-fonte. Para desenvolvedores e equipes, ter um template de repositório padrão pode agilizar o processo de criação de novos projetos, garantindo que todos sigam as mesmas diretrizes e melhores práticas desde o início. Um template pode incluir estrutura de diretórios, arquivos de configuração, documentação e muito mais. Neste guia, vamos explorar como criar e utilizar um template de repositório padrão no GitHub. Então vamos lá, basta acessar sua conta, criar um novo repositorio, então adicione arquivos como pastas e documentos e modifique a README.md e a license. Depois de tudo isso feito, vá nas configurações do repositorio e marque como sim",
                ]}
              />

              <Post
                title="Template repository"
                tags={["Github", "Tips"]}
                texts={[
                  "ão em código-fonte. Para desenvolvedores e equipes, ter um template de repositório padrão pode agilizar o processo de criação de novos projetos, garantindo que todos sigam as mesmas diretrizes e melhores práticas desde o início. Um template pode incluir estrutura de diretórios, arquivos de configuração, documentação e muito mais. Neste guia, vamos explorar como criar e utilizar um template de repositório padrão no GitHub. Então vamos lá, basta acessar sua conta, criar um novo repositorio, então adicione arquivos como pastas e documentos e modifique a README.md e a license. Depois de tudo isso feito, vá nas configurações do repositorio e marque como sim",
                ]}
              />
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
