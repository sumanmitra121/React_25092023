
const DbIntr = async () => {

          const response = await fetch(`https://api.github.com/users/sumanmitra121`);
          return response.json();
}

export default DbIntr;