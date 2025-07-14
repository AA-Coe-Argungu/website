'use client'
import PageHero from "@/components/PageHero";
import { FaImages, FaVideo, FaMusic, FaFolder, FaPlay, FaSearch } from "react-icons/fa";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import {albums} from "@/data/albums"
const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter albums based on search term
  const filteredAlbums = albums.filter(album =>
    album.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    album.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Prepare slides for lightbox
  const prepareSlides = (media) => {
    return media.map(item => {
      if (item.type === "image") {
        return { src: item.url, alt: item.alt };
      } else if (item.type === "video") {
        return { 
          type: "video", 
          sources: [{ 
            src: item.url, 
            type: "video/mp4" 
          }],
          poster: item.thumbnail,
          alt: item.alt
        };
      } else if (item.type === "audio") {
        return {
          type: "video", // Using video type for audio to display thumbnail
          sources: [{
            src: item.url,
            type: "audio/mp3"
          }],
          poster: item.thumbnail,
          alt: item.alt
        };
      }
      return null;
    }).filter(Boolean);
  };

  const openAlbum = (album) => {
    setSelectedAlbum(album);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const getMediaIcon = (type) => {
    switch(type) {
      case "image":
        return <FaImages className="text-blue-500" />;
      case "video":
        return <FaVideo className="text-red-500" />;
      case "audio":
        return <FaMusic className="text-purple-500" />;
      default:
        return <FaImages className="text-gray-500" />;
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <PageHero 
        img={"/gallery-hero.jpg"} 
        title="College Gallery" 
        description="Explore our collection of photos, videos and audio from campus events" 
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Media Albums</h2>
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search albums..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Album View */}
        {!selectedAlbum ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAlbums.map((album) => (
              <div 
                key={album.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => openAlbum(album)}
              >
                <div className="relative h-48 w-full">
                  <img 
                    src={album.coverImage} 
                    alt={album.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white font-semibold">View Album</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{album.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaFolder className="mr-1 text-yellow-500" />
                    <span>{album.media.length} items</span>
                    <span className="mx-2">•</span>
                    <span>{album.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Single Album View */
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedAlbum.title}</h2>
                  <p className="text-gray-600">{selectedAlbum.date}</p>
                </div>
                <button
                  onClick={() => setSelectedAlbum(null)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Back to Albums
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-6">
              {selectedAlbum.media.map((item, index) => (
                <div 
                  key={index} 
                  className="relative group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  {item.type === "image" && (
                    <img 
                      src={item.url} 
                      alt={item.alt} 
                      className="w-full h-40 object-cover rounded-md"
                    />
                  )}
                  {item.type === "video" && (
                    <div className="relative">
                      <img 
                        src={item.thumbnail} 
                        alt={item.alt} 
                        className="w-full h-40 object-cover rounded-md"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <FaPlay className="text-white text-3xl" />
                      </div>
                    </div>
                  )}
                  {item.type === "audio" && (
                    <div className="relative">
                      <img 
                        src={item.thumbnail} 
                        alt={item.alt} 
                        className="w-full h-40 object-cover rounded-md"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <FaMusic className="text-white text-3xl" />
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm rounded-b-md flex items-center">
                    {getMediaIcon(item.type)}
                    <span className="ml-2 truncate">{item.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox for media viewing */}
        {selectedAlbum && (
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            index={lightboxIndex}
            slides={prepareSlides(selectedAlbum.media)}
            plugins={[Video, Zoom]}
            controller={{ closeOnBackdropClick: true }}
          />
        )}

        {/* Empty State */}
        {filteredAlbums.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 flex items-center justify-center bg-gray-200 rounded-full mb-4">
              <FaSearch className="text-gray-500 text-3xl" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">No albums found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We couldn't find any albums matching your search. Try different keywords or browse all albums.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
