
#!/bin/bash
set -e

# get env by current branch name
branch=$CI_COMMIT_REF_NAME
if [[ "$branch" = "preview" ]]; then
    env=pre
    build_env=pre
elif [[ "$branch" = "master" ]]; then
    env=prd
    build_env=prd
else
    env=dev
    build_env=dev
fi

# diff modifed page for building
search_dir=src/pages
counter=0
for path in "$search_dir"/*; do
echo "$(git diff HEAD~ --name-only | grep "$path")"
    if [ "$(git diff HEAD~ --name-only | grep "$path/")" ]; then
        page_name=$(basename $path)
        echo "[CI] Page \"$page_name\" has been modified"
        echo "[CI] Start building"
        # npm run build # todo $page_name $env $build_env
        npx cross-env NODE_ENV=production PAGE=$page_name node build/build.js
        counter=$((counter + 1))
    fi
done

if [ "$counter" -eq "0" ]; then
    echo "[CI] No page has been modifed"
    echo "[CI] Skip Building"
fi
