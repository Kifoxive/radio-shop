import React, { useState } from "react";
import styles from "../../styles";

import { useForm, SubmitHandler } from "react-hook-form";
import { Preload } from "../../@components";

export interface IInputs {
  email: string;
  password: string;
}

const Profile: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IInputs>({ mode: "onBlur" });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<IInputs> = async (fields) => {
    try {
      setIsLoading(true);
      console.log(JSON.stringify(fields));
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  return (
    <div className="w-full p-6">
      <h3 className={`${styles.heading3} text-black sm:text-start mb-16`}>
        Profile
      </h3>
      <div className="flex justify-center items-center w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={"bg-gray-200 p-[10px] md:p-[20px] w-[400px]"}
        >
          <h3 className={`${styles.heading3} text-black text-center py-12`}>
            Login
          </h3>
          <div className="flex flex-col gap-10 p-4">
            <div className="w-full">
              <input
                type="text"
                {...register("email", {
                  required: "e-mail is required",
                  minLength: {
                    value: 2,
                    message: "too short e-mail",
                  },
                })}
                placeholder="e-mail"
                className={`${styles.paragraph} w-full p-5 placeholder:text-black border-2 border-solid border-transparent focus:border-blue-400`}
              />
              {errors?.email && (
                <p
                  className={`${styles.paragraph} my-2 text-red-700 text-bold relative`}
                >
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <input
                type="password"
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 5,
                    message: "password is too short",
                  },
                })}
                placeholder="password"
                className={`${styles.paragraph} w-full p-5 placeholder:text-black border-2 border-solid border-transparent focus:border-blue-400`}
              />
              {errors?.password && (
                <p
                  className={`${styles.paragraph} my-2 text-red-700 text-bold`}
                >
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="self-end w-[50%]">
              <button
                className={`${styles.smallText} bg-blue-400 px-8 py-4 uppercase font-bold text-white relative hover:top-1 hover:bg-blue-500 hover:shadow-lg w-full`}
              >
                Log in
              </button>
            </div>
          </div>
        </form>
      </div>
      {isLoading && <Preload />}
    </div>
  );
};

export default Profile;
