import { useSetRecoilState } from "recoil";
import { countryState } from "../recoil/atom";
import { useForm } from "react-hook-form";
import { Categories, ICountry } from "../types/country";

function InputForm() {
  const setCountry = useSetRecoilState(countryState);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ICountry>();

  const handleValid = ({ countryName }: ICountry) => {
    setValue("countryName", "");

    setCountry(
      (countryList) =>
        [
          ...countryList,
          {
            countryName,
            category: Categories.WANT_TO_GO,
            id: Date.now(),
          },
        ] as ICountry[]
    );
  };
  return (
    <>
      <h2>내가 가보자고!하는 나라들</h2>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("countryName", { required: "어디 가고 싶은데!!!" })}
          placeholder="나라 이름"
        />
        <button>가쥬아!</button>
      </form>
    </>
  );
}

export default InputForm;
