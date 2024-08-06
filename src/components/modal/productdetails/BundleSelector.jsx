import React, { useEffect, useState } from "react";

const BundleSelector = ({ bundles, selectedBundle, onSelectBundle }) => {
  const [defaultBundleSet, setDefaultBundleSet] = useState(false);

  useEffect(() => {
    if (!defaultBundleSet && bundles.length > 0) {
      const defaultBundle = bundles.find(
        (bundle) => bundle.courseName === "Digital Marketing Pro"
      );
      if (defaultBundle) {
        onSelectBundle(defaultBundle.id.toString());
        setDefaultBundleSet(true);
      }
    }
  }, [bundles, defaultBundleSet, onSelectBundle]);

  const selectedCourse = selectedBundle
    ? bundles.find((bundle) => bundle.id === parseInt(selectedBundle, 10))
    : null;

  const selectedSubCourses = selectedCourse ? selectedCourse.subCourses : [];

  return (
    <>
      <div className="bundle-selector">
        <label htmlFor="bundle-select">Select bundle</label>
        <select
          id="bundle-select"
          value={selectedBundle || ""}
          onChange={(e) => onSelectBundle(e.target.value)}
        >
          <option value="">Select a bundle</option>
          {bundles.map((bundle) => (
            <option key={bundle.id} value={bundle.id.toString()}>
              {bundle.courseName}
            </option>
          ))}
        </select>
      </div>
      {selectedBundle && (
        <div className="subcourses">
          {selectedSubCourses.length > 0 ? (
            <ul>
              {selectedSubCourses.map((subCourse) => (
                <li key={subCourse.id}>
                  {subCourse.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No sub-courses available</p>
          )}
        </div>
      )}
    </>
  );
};

export default BundleSelector;
