import React from "react"
import css from "@emotion/css"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
const IndexPage = () => (
  <div>
    <div className="container py-20">
      <h1 className="text-3xl font-bold">Sample page</h1>
      <h3 className="text-2xl mt-20">I have .row</h3>
      <div className="row my-12">
        <div className="col w-full md:w-1/2">
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            .col
          </div>
        </div>
        <div className="col w-full md:w-1/2">
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            .col
          </div>
        </div>
      </div>
    </div>

    <div className="container mb-20">
      <h3>Style using tw macro</h3>
      <div
        css={css`
          ${tw`text-red-500`}
          h2 {
            ${tw`text-2xl font-bold`}
          }
        `}
      >
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, omnis!
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          dolor perferendis cum exercitationem voluptatum nihil sed, deserunt ab
          nam, quo eveniet. Voluptatibus ratione corporis earum maxime libero
          asperiores dicta reprehenderit!
        </p>
        <div
          className="bg-gray-300 p-12
        "
        >
          <Card>
            <h2>This is a styled component</h2>
          </Card>
        </div>

        <div
          className="bg-blue-200 mt-20 p-12"
          css={css`
            p {
              strong {
                ${tw`font-bold text-xl text-blue-900`}
              }
            }
          `}
        >
          <p>
            Nesting is supported in <strong>css</strong> like you have in SCSS
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage

const Card = styled.div`
  ${tw`shadow-lg bg-white p-8 rounded-lg`}
`
