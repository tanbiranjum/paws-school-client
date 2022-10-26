const signInWithGoogle = (e) => {
  e.preventDefault();
  providerLogin(googleProvider)
    .then((result) => {
      navigate("/home");
    })
    .catch((error) => {
      console.log(error);
    });
};

const signInWithGithub = (e) => {
  e.preventDefault();
  providerLogin(githubProvider)
    .then((result) => {
      navigate("/home");
    })
    .catch((error) => {
      console.log(error);
    });
};
