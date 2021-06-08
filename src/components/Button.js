import React from "react";
import styled from "styled-components";


const OneBtn = styled.button`
background : ${props => props.primary ? "palevioletred" : "transparent"};
color: ${props => props.primary ? "white" : "palevioletred"}; ;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
cursor: pointer;
`;

const TomatoBtn = styled(OneBtn)`
color: tomato;
border-color: tomato;
`;

const Input = styled.input.attrs(props => ({
    type: "text",
    size : props.size || '0.75rem'
}))`
    border: 2px solid ${props=> props.color || "palevioletred"};
    color: ${props=> props.color || "palevioletred"};
    background: transparent;
    margin: ${props => props.size};
    padding: ${props => props.size};
`;

const Password = styled(Input).attrs({
    type: "password",
  })`
    // similarly, border will override Input's border
    border: 2px solid aqua;
  `;

function Button() {
  return (
    <div>
            <OneBtn primary>
                Primary
            </OneBtn>



            <section class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-x-4 text-center">
  <div class="flex-shrink-0">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</section>

            <OneBtn>
                Normal
            </OneBtn>

            <TomatoBtn as="a" href="/">
                Tomato Button
            </TomatoBtn>
            <br/>
            <Input size="1rem" placeholder="Enter Text" color="mediumpurple" type="text"></Input>
            <Password placeholder="Enter Password"></Password>
    </div>
  );
}

export default Button;
