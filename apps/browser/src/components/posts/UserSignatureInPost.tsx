export function UserSignatureInPost(props: { signature: string | null }) {
  const { signature } = props;
  return (
    <>
      {signature ? (
        <>
          <div className="border-t-2 border-stone-400 m-4 pt-4">
            {signature}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
