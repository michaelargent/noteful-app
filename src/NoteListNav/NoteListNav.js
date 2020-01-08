import React from 'react';
import { Link } from 'react-router-dom';
import NotesContext from '../NotesContext';
import AddFolder from  '../AddFolder'

// This component is rendered in the sidebar for the '/' and 'folder/:folderId' routes
class NoteListNav extends React.Component {
  static contextType = NotesContext;

  state = {
    showNewFolderForm: false,
  }

  render() {

    return (
      <div className="Sidebar">
        <h2>Folders</h2>
        <ul>

          {/* Loop through the array of folders passed as a prop */}
          {this.context.folders.map((folder) => {

            /* for each folder in the array, set variable 'classes' as either
            'folder' or 'folder' AND 'selected'. If the selected folderId is
            the same as the id of the current folder in the array, then add 'selected' to classes
            */
            const classes = this.props.match.params.folderId && this.props.match.params.folderId === folder.id
              ? 'folder selected'
              : 'folder'

            // Create list item for each folder in the array
            return(

              <li key={folder.id}>
                <Link className={classes} to={`/folders/${folder.id}`}>{folder.name}</Link>
              </li>
            )
          })}
        </ul>
        <button>New Folder</button>
        {/* if */}
        {this.state.showNewFolderForm && <AddFolder />}
      </div>
    );
  }
}

NoteListNav.defaultProps = {
  folders: []
}

export default NoteListNav;
