import React from "react";
import { TopMangas } from "../lib/fetchMenuData";

const TopManga = () => {
  return (
    <div>
      {TopMangas.data.slice(0, 6).map((tag) => (
        <div>
          
          <div>
            <Image
            
            
            />
          </div>

          <div class="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
            <h3 class="text-2xl font-bold">
              {tag.attributes.title.en}
            </h3>
            <div>
              By
              {tag.relationships.map(
                (rele) =>
                  rele.type === "author" && (
                    <p className="text-sm">
                      {rele.attributes.name}
                    </p>
                  )
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopManga;
