import React from "react";
import ImageGallery from "../UI/ImageGallery";

const SingleColumnTemplate = ({ page }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;
    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
      if (obj.href) {
        modifiedText = (
          <a
            className={`${obj.className} text-red-500 font-semibold`}
            href={obj.href}
          >
            {" "}
            {obj.children[0].text}{" "}
          </a>
        );
      }
      if (obj.type == "list-item") {
        modifiedText = <li key={index}>{obj.children[0].children[0].text}</li>;
      }
      
    }

    switch (obj.type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "bulleted-list":
        return (
          <ul key={index} className="mb-4 px-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </ul>
        );
      case "image":
        return (
          <div key={index} className="h-full flex justify-center mx-2">
            <img alt={obj.title} width={obj.width} src={obj.src} />
          </div>
        );
      case "table":
        return (
          <table>
            <tbody>
              {modifiedText.map((item, i) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
            </tbody>
          </table>
        );
      case "table-row":
        return (
          <tr>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </tr>
        );
      case "table-cell":
        return (
          <td>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </td>
        );
      case "iframe":
        return (
          <div key={index} className="flex w-full justify-center">
            <iframe
              width={obj.width}
              height={obj.height}
              src={obj.url}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative flex justify-center overflow-hidden pb-6 mb-6">
          {page.image?.length > 0 ? (
            <ImageGallery images={page.image} />
          ) : (
            <img
              src={page.featuredImage?.url}
              alt=""
              className="h-full object-top w-auto object-cover shadow-lg rounded-t-lg lg:rounded-lg"
            />
          )}
        </div>
        <div className="px-4 lg:px-0">
          <h1 className="mb-8 text-3xl font-semibold">{page.title}</h1>
          {page.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </>
  );
};

export default SingleColumnTemplate;
