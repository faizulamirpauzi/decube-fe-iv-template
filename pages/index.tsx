import { Inter } from "next/font/google";
import {useState, useEffect} from "react";
import Image from "next/image";
import {Button, Card, Typography} from "@material-tailwind/react"

const inter = Inter({ subsets: ["latin"] });
const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function Home() {
  const header = ["Original Title", "Title", "Language", "Release Date", ""]

  const rows = [
    {
      id: "123",
      oTitle: "Dune: Part Two",
      title:"Dune: Part Two",
      language:"en",
      releaseDate: "2024-02-27"
    },
    {
      id: "456",
      oTitle: "외계+인 1부",
      title:"Alienoid",
      language:"ko",
      releaseDate: "2022-07-20"
    }
  ]

  const [movieData, setMovieData] = useState([])

  useEffect(()=>{
    const getMovie = async() => {
      const movieAPI = await fetch(
        'https://api.themoviedb.org/3/movie/popular')
        setMovieData(await movieAPI.json())
    }

    
    
  })

  return (
    <main
      className={cn(
        "min-h-screen flex flex-col items-center justify-center p-24 gap-4",
        inter.className
      )}
    >
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {header.map((head) => (
              <th key={head}
              className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small">
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({id, oTitle, title,language, releaseDate}, index)=>{

const isLast = index === rows.length - 1;
const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return(
              <tr key={id}>
                <td className={classes}>
                  <Typography variant="small">
                    {oTitle}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small">
                    {title}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small">
                    {language}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small">
                    {releaseDate}
                  </Typography>
                </td>
                <td className={classes}>
                  <Button>
                    Details
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </main>
  );
}
