import React, { useState, useEffect, useCallback } from "react";
import {
  Container,
  AddDreamSection,
  SearchButton,
  AddDreamWrapper,
} from "./styles";
import {
  clearStorage,
  initiatStorage,
  generateId,
  addDream,
  getDreams,
  executeScroll,
} from "../../utils/helper";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/custom-input.component";
import DreamsComponent from "../dreams/dreams";
import { useRef } from "react";

const Home = () => {
  const { register, handleSubmit, errors, watch, reset } = useForm();
  const [page, setPage] = useState(1);
  const [dreams, setDreams] = useState([]);
  const values = watch();
  let myRef = useRef(null);

  const onFormSubmit = (values) => {
    const newDream = {
      id: generateId(),
      ...values,
    };
    addDream(newDream);
    setDreams(getDreams(page));
    reset({
      firstName: "",
      dream: "",
    });
    executeScroll(myRef);
  };

  const myGetDreamsCallback = useCallback(async () => {
    await initiatStorage();
  }, []);

  useEffect(() => {
    myGetDreamsCallback();
    return () => {
      clearStorage();
    };
  }, [myGetDreamsCallback]);

  useEffect(() => {
    setDreams(getDreams(page));
  }, [page]);

  return (
    <Container>
      <div className="jumbo">
        <p>Welcome to my Dreams</p>
      </div>
      <AddDreamSection>
        <AddDreamWrapper onSubmit={handleSubmit(onFormSubmit)}>
          <CustomInput
            type="text"
            name="firstName"
            onChange={(e) => {}}
            label="What is your first name?"
            placeholder="Mike"
            customRef={register({
              required: {
                value: true,
                message: "Required!",
              },
            })}
            error={errors && errors.firstName && errors.firstName.message}
            value={values.firstName}
          />
          <CustomInput
            type="text"
            name="dream"
            label="What did you dream of last night?"
            placeholder="Enter your dream"
            customRef={register({
              required: {
                value: true,
                message: "Required!",
              },
            })}
            multiline
            error={errors && errors.dream && errors.dream.message}
            value={values.dream}
          />

          <SearchButton type="submit">Add dream</SearchButton>
        </AddDreamWrapper>
        <DreamsComponent
          customRef={myRef}
          dreams={dreams}
          setDreams={setDreams}
          page={page}
          setPage={setPage}
        />
      </AddDreamSection>
    </Container>
  );
};

export default Home;
