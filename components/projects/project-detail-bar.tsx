import PrimaryButton from '../ui/buttons/primary-button';
import BookmarkIconOutline from '../ui/icons/outline/bookmark-icon';
import ShareIconSolid from '../ui/icons/solid/share-icon';

export default function ProjectDetailBar() {
  return (
    <div className="max-w-lg m-auto flex fixed bottom-0 inset-x-0 z-10 bg-white shadow-xl border-t p-3">
      <button type="button" className="px-4 py-2 text-indigo-700">
        <ShareIconSolid className="h-5 w-5" />
      </button>
      <button type="button" className="px-4 py-2 text-indigo-700">
        <BookmarkIconOutline className="h-5 w-5" />
      </button>
      <PrimaryButton size="md" className="ml-2 flex-1">
        Apply
      </PrimaryButton>
    </div>
  );
}
