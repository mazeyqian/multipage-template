#!/bin/bash
set -e

# get env by current branch name
branch=$CI_COMMIT_REF_NAME
# 预发布环境
if [[ "$branch" == "preview" ]]; then
    env=pre
# 生产环境
elif [[ "$branch" == "master" ]]; then
    env=prd
# 测试环境
else
    env=dev
fi

npm run release:$env
