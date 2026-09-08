data "aws_iam_policy_document" "github_actions_deploy" {
  statement {
    sid    = "ListDeploymentBucket"
    effect = "Allow"

    actions   = ["s3:ListBucket"]
    resources = [aws_s3_bucket.website.arn]
  }

  statement {
    sid    = "DeployWebsiteObjects"
    effect = "Allow"

    actions = [
      "s3:GetObject",
      "s3:PutObject",
      "s3:DeleteObject"
    ]

    resources = ["${aws_s3_bucket.website.arn}/*"]
  }

  statement {
    sid    = "InvalidateCloudFront"
    effect = "Allow"

    actions   = ["cloudfront:CreateInvalidation"]
    resources = [
      "arn:aws:cloudfront::${var.aws_account_id}:distribution/${var.cloudfront_distribution_id}"
    ]
  }
}

resource "aws_iam_policy" "github_actions_deploy" {
  name        = "GitHubActionsDevOpsPlatformDeploy"
  description = "Least-privilege deployment policy for the DevOps Platform GitHub Actions workflow."
  policy      = data.aws_iam_policy_document.github_actions_deploy.json
}

resource "aws_iam_user" "github_actions_deploy" {
  name = var.github_actions_user_name
}

resource "aws_iam_user_policy_attachment" "github_actions_deploy" {
  user       = aws_iam_user.github_actions_deploy.name
  policy_arn = aws_iam_policy.github_actions_deploy.arn
}
