// Sidebar.js
import React, { useState } from "react";
import {
  Download,
  Edit3,
  Eye,
  Bot,
  Share2,
  FileUp,
  Sparkles,
  Save,
  FilePenLine,
  Wand2,
} from "lucide-react";

export default function Sidebar({
  resumeData,
  onFontChange,
  onEdit,
  onPreview,
  onDownload,
  onSave,
  onAIEnhance,
  onColorChange,
  isEditing,
  font,
  shareContent,
}) {
  const [showEnhanceOptions, setShowEnhanceOptions] = useState(false);
  const [showUploadOptions, setShowUploadOptions] = useState(false);
  const [showFontOptions, setShowFontOptions] = useState(false);

  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: "My Resume", text: shareContent });
        alert("Resume shared successfully!");
      } catch {
        alert("Sharing failed or cancelled.");
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareContent);
        alert("Share text copied to clipboard!");
      } catch {
        alert("Sharing not supported and unable to copy.");
      }
    }
  };

  const fontOptions = [
    { label: "Serif", value: "font-serif" },
    { label: "Mono", value: "font-mono" },
    { label: "Inter", value: "font-inter" },
    { label: "Poppins", value: "font-poppins" },
    { label: "Roboto", value: "font-roboto" },
    { label: "Lato", value: "font-lato" },
    { label: "Open Sans", value: "font-open-sans" },
    { label: "Merriweather", value: "font-merriweather" },
    { label: "Playfair Display", value: "font-playfair" },
  ];

  const enhanceSections = [
    "education",
    "projects",
    "experience",
    "skills",
    "interests",
    "achievements",
    "strengths",
  ];

  return (
    <div className="bg-purple-800 text-white w-full sm:w-64 p-4 flex flex-col gap-4">
      <h2 className="text-xl font-bold text-center">Resume Tools</h2>

      <button
        onClick={onDownload}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700"
      >
        <Download size={18} /> Download PDF
      </button>

      <button
        onClick={onSave}
        className="w-full flex items-center justify-center gap-2 bg-red-600 px-4 py-2 rounded-full hover:bg-red-700"
      >
        <Save size={18} /> Save to Documents
      </button>

      <button
        onClick={onEdit}
        className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-full ${
          isEditing ? "bg-green-700" : "bg-green-800 hover:bg-green-600"
        }`}
      >
        <Edit3 size={18} /> Edit Resume
      </button>

      <button
        onClick={onPreview}
        className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-full ${
          !isEditing ? "bg-purple-700" : "bg-purple-500 hover:bg-purple-600"
        }`}
      >
        <Eye size={18} /> Preview Resume
      </button>

      <div className="relative w-full">
        <button
          onClick={() => setShowUploadOptions(!showUploadOptions)}
          className="w-full flex items-center justify-center gap-2 bg-yellow-600 px-4 py-2 rounded-full hover:bg-yellow-700"
        >
          <FileUp size={18} /> Upload Resume
        </button>
        {showUploadOptions && (
          <div className="absolute z-10 mt-1 bg-white shadow-lg rounded w-full text-left">
            <button
              onClick={onEdit}
              className="w-full px-4 py-2 text-sm text-black hover:bg-gray-100 flex items-center gap-2"
            >
              <FilePenLine size={14} /> Manual Edit
            </button>
            <button
              onClick={onEdit}
              className="w-full px-4 py-2 text-sm text-black hover:bg-gray-100 flex items-center gap-2"
            >
              <Wand2 size={14} /> AI Edit
            </button>
            <button
              onClick={() => onAIEnhance("all")}
              className="w-full px-4 py-2 text-sm text-black hover:bg-gray-100 flex items-center gap-2"
            >
              <Sparkles size={14} /> AI Enhance All
            </button>
          </div>
        )}
      </div>

      <button
        onClick={() => setShowEnhanceOptions(!showEnhanceOptions)}
        className="w-full flex items-center justify-center gap-2 bg-pink-600 px-4 py-2 rounded-full hover:bg-pink-700"
      >
        <Bot size={18} /> AI Assistant
      </button>

      {showEnhanceOptions && (
        <div className="space-y-3 mt-2">
          {enhanceSections.map((section) =>
            resumeData[section]?.map((_, index) => (
              <button
                key={`${section}-${index}`}
                onClick={() => onAIEnhance(section, index)}
                className="w-full text-left text-sm bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600"
              >
                <Sparkles size={14} className="inline mr-1" /> Enhance {section} #{index + 1}
              </button>
            ))
          )}
        </div>
      )}

      <button
        onClick={handleShareClick}
        className="w-full flex items-center justify-center gap-2 bg-indigo-800 px-4 py-2 rounded-full hover:bg-indigo-700"
      >
        <Share2 size={18} /> Share Resume
      </button>

      <div className="w-full">
        <button
          onClick={() => setShowFontOptions(!showFontOptions)}
          className="w-full flex items-center justify-center gap-2 bg-pink-800 px-4 py-2 rounded-full hover:bg-pink-900"
        >
          🎨 Font Style
        </button>
        {showFontOptions && (
          <div className="space-y-2 mt-2 w-full">
            {fontOptions.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => onFontChange(value)}
                className={`w-full text-left text-sm px-3 py-1 rounded-full ${
                  font === value
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-black hover:bg-gray-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={onColorChange}
        className="w-full flex items-center justify-center gap-2 bg-red-900 px-4 py-2 rounded-full hover:bg-gray-700"
      >
        🎨 Change Resume Color
      </button>
    </div>
  );
}
