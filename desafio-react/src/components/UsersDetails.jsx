const UserDetails = ({user}) => {
  return (
  <>
    {user &&
        user?.map(
          (uinfo, i) => (
          <div
            key={i}
            className="flex justify-center md:flex-row
            md:px-0 px-4 flex-col gap-10"
          >
            <img
              src={uinfo.avatar_url}
              className="w-[350px] border-4 border-teal-400 md:mx-0 mx-auto"
            />
            <div className="text-lg leading-10 px-3">
              <h1 className="text-3xl pb-4">{uinfo.name}</h1>
              <h1>
                <span className="text-teal-400">Login_name</span> :{uinfo.login}
              </h1>
              <h1>
                <span className="text-teal-400">followers : </span>
                {uinfo.followers}
              </h1>
              <h1>
                <span className="text-teal-400">following : </span>
                {uinfo.following}
              </h1>
              <h1>
                <span className="text-teal-400">public_repositories : </span>
                {uinfo.public_repos}
              </h1>
              <h1>
                <span className="text-teal-400">Join : </span>
                {new Date(uinfo.created_at).toLocaleDateString()}
              </h1>
              <a
                href={uinfo.html_url}
                target="_blank"
                className="text-gray-200 
                  font-semibold rounded cursor-pointer  px-4 py-1 bg-teal-600 my-3 tracking-wide"
              >
                Visit
              </a>
            </div>
          </div>
      )
      )}

  </>
  );
}
export default UserDetails;