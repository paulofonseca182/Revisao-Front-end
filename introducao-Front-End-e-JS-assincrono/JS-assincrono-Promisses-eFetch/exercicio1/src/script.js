import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/utils';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
// Lógica para pegar as informações das pessoas usuárias e preencher o select aqui
fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => {
    fillUsersSelect(data.users);
  });

usersSelect.addEventListener('change', () => {
  clearPageData();

  // Lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
  const UserID = usersSelect.value;
  const apiID = `https://dummyjson.com/posts/user/${UserID}`;

  fetch(apiID)
    .then((response) => response.json())
    .then((data) => {
      const { posts } = data;
      fillPosts(posts);
      const postApi = fetch(`https://dummyjson.com/posts/${posts[0].id}/comments`);
      return postApi;
    })
    .then((response) => response.json())
    .then((data) => fillFeaturedPostComments(data.comments))
    .catch((error) => fillErrorMessage(error.message));
});
