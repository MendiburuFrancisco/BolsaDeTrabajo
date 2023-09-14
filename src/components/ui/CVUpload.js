function CVUpload() {
    return (
      <div className="mb-4">
        <label className="block font-semibold mb-1">Cargar CV (PDF):</label>
        <input
          type="file"
          accept=".pdf"
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
    );
  }
  
  export default CVUpload;