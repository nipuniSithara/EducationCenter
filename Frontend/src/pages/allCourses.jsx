
export const AllCourses = () => {
    return(
        <div className="main-container">
            <div className="d-flex flex-row justify-content-between"> 
                <div className="col-5 d-flex flex-row justify-content-between">
                    <label for="inputEmail3" class="col-sm-4 col-form-label">Department</label>
                    <div class="col-sm-8">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div className="col-5 d-flex flex-row justify-content-between">
                    <label for="inputEmail3" class="col-sm-4 col-form-label">Level</label>
                    <div class="col-sm-8">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>All</option>
                            <option value="1">Level - 1</option>
                            <option value="2">Level - 2</option>
                            <option value="3">Level - 3</option>
                            <option value="4">Level - 4</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}