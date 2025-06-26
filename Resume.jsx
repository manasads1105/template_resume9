import React from "react";
import {
  Target,
  BookOpen,
  Code,
  Briefcase,
  Star,
  Heart,
  Award,
  ShieldCheck,
} from "lucide-react";

// Reusable List Section
const SectionList = ({ icon: Icon, title, items, onChange, onAdd, onRemove, isEditing }) => (
  <div className="mb-4">
    <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-700 mb-2">
      <Icon size={20} /> {title}
    </h3>
    {items.map((item, index) =>
      isEditing ? (
        <div key={index} className="flex items-start gap-2 mb-2">
          <textarea
            value={item}
            onChange={(e) => onChange(index, e.target.value)}
            className="w-full border border-gray-300 p-2 rounded bg-white text-black"
            rows={2}
          />
          <button
            onClick={() => onRemove(index)}
            className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition"
          >
            Remove
          </button>
        </div>
      ) : (
        <p key={index} className="text-gray-900 mb-1">
          - {item}
        </p>
      )
    )}
    {isEditing && (
      <div className="flex gap-2 mt-2">
        <button
          onClick={onAdd}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          + Add {title}
        </button>
      </div>
    )}
  </div>
);

// Reusable Single Text Section
const SectionSingle = ({ icon: Icon, title, content, onChange, isEditing, keyName }) => (
  <div className="mb-4">
    <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-700 mb-2">
      <Icon size={20} /> {title}
    </h3>
    {isEditing ? (
      <textarea
        value={content}
        onChange={(e) => onChange(keyName, e.target.value)}
        className="w-full border border-gray-300 p-2 rounded bg-white text-black"
        rows={3}
      />
    ) : (
      <p className="whitespace-pre-line text-gray-900">{content}</p>
    )}
  </div>
);

// Resume Component
export default function Resume({ data, onChange, isEditing, fontClass, profileImage, bgColor }) {
  const handleListChange = (key, index, value) => {
    const updated = [...data[key]];
    updated[index] = value;
    onChange(key, updated);
  };

  const handleAddItem = (key, placeholder) => {
    const updated = [...data[key], placeholder];
    onChange(key, updated);
  };

  const handleRemoveItem = (key, index) => {
    const updated = [...data[key]];
    updated.splice(index, 1);
    onChange(key, updated);
  };

  return (
    <div
      id="resume"
      className={`w-full max-w-screen-xl mx-auto p-5 rounded-lg shadow-md border border-black min-h-screen overflow-auto text-black ${fontClass} ${bgColor}`}
      style={{
        width: "1080px",
        padding: "15px",
        margin: "0 auto",
        boxSizing: "border-box",
        pageBreakInside: "avoid",
      }}
    >
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/3 bg-blue-300 p-4">
          {profileImage && (
            <div className="mb-4">
              <img
                src={profileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
              />
            </div>
          )}

          <SectionList
            icon={Star}
            title="Skills"
            items={data.skills}
            onChange={(i, v) => handleListChange("skills", i, v)}
            onAdd={() => handleAddItem("skills", "New skill")}
            onRemove={(i) => handleRemoveItem("skills", i)}
            isEditing={isEditing}
          />

          <SectionList
            icon={Award}
            title="Achievements"
            items={data.achievements}
            onChange={(i, v) => handleListChange("achievements", i, v)}
            onAdd={() => handleAddItem("achievements", "New achievement")}
            onRemove={(i) => handleRemoveItem("achievements", i)}
            isEditing={isEditing}
          />

          <SectionList
            icon={Heart}
            title="Interests"
            items={data.interests}
            onChange={(i, v) => handleListChange("interests", i, v)}
            onAdd={() => handleAddItem("interests", "New interest")}
            onRemove={(i) => handleRemoveItem("interests", i)}
            isEditing={isEditing}
          />

          <SectionList
            icon={ShieldCheck}
            title="Strengths"
            items={data.strengths}
            onChange={(i, v) => handleListChange("strengths", i, v)}
            onAdd={() => handleAddItem("strengths", "New strength")}
            onRemove={(i) => handleRemoveItem("strengths", i)}
            isEditing={isEditing}
          />
        </div>

        {/* Right Main Content */}
        <div className="w-full lg:w-2/3 bg-white p-4">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-blue-700">{data.name}</h1>
            <p className="text-gray-800">{data.contact}</p>
          </div>

          <SectionSingle
            icon={Target}
            title="Career Objective"
            content={data.objective}
            onChange={onChange}
            isEditing={isEditing}
            keyName="objective"
          />

          <SectionList
            icon={BookOpen}
            title="Education"
            items={data.education}
            onChange={(i, v) => handleListChange("education", i, v)}
            onAdd={() => handleAddItem("education", "New education entry")}
            onRemove={(i) => handleRemoveItem("education", i)}
            isEditing={isEditing}
          />

          <SectionList
            icon={Code}
            title="Projects"
            items={data.projects}
            onChange={(i, v) => handleListChange("projects", i, v)}
            onAdd={() => handleAddItem("projects", "New project entry")}
            onRemove={(i) => handleRemoveItem("projects", i)}
            isEditing={isEditing}
          />

          <SectionList
            icon={Briefcase}
            title="Experience"
            items={data.experience}
            onChange={(i, v) => handleListChange("experience", i, v)}
            onAdd={() => handleAddItem("experience", "New experience entry")}
            onRemove={(i) => handleRemoveItem("experience", i)}
            isEditing={isEditing}
          />
        </div>
      </div>
    </div>
  );
}
